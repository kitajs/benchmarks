<div align="center">
  <img src="https://github.com/fastify/graphics/raw/HEAD/fastify-landscape-outlined.svg" width="650" height="auto"/>
</div>

<div align="center">

[![CI](https://github.com/fastify/fastify/workflows/ci/badge.svg)](https://github.com/fastify/fastify/actions/workflows/ci.yml)
[![Coverage Status](https://coveralls.io/repos/github/fastify/fastify/badge.svg?branch=master)](https://coveralls.io/github/fastify/fastify?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)
[![NPM version](https://img.shields.io/npm/v/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify)
[![NPM downloads](https://img.shields.io/npm/dm/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify) [![Discord](https://img.shields.io/discord/725613461949906985)](https://discord.gg/fastify)

</div>
<br />

# TL;DR

* [Fastify](https://github.com/fastify/fastify) is a fast and low overhead web framework for Node.js.
* This package shows how fast it is comparatively.
* For metrics (cold-start) see [metrics.md](./METRICS.md)

# Requirements

To be included in this list, the framework should captivate users' interest. We have identified the following minimal requirements:
- **Ensure active usage**: a minimum of 500 downloads per week
- **Maintain an active repository** with at least one event (comment, issue, PR) in the last month
- The framework must use the **Node.js** HTTP module

# Usage

Clone this repo. Then 

```
node ./benchmark [arguments (optional)]
```

#### Arguments

* `-h`: Help on how to use the tool.
* `compare`: Get comparative data for your benchmarks.

> You may also compare all test results, at once, in a single table; `benchmark compare -t`

> You can also extend the comparison table with percentage values based on fastest result; `benchmark compare -p`
# Benchmarks

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.19.5`
* __Run:__ Mon Nov 24 2025 01:39:10 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.19.5 | ✗      | 47117.6    | 20.72        | 8.40          |
| polka                    | 0.5.2    | ✓      | 46590.4    | 20.96        | 8.31          |
| rayo                     | 1.4.6    | ✓      | 45445.6    | 21.51        | 8.10          |
| fastify                  | 4.29.1   | ✓      | 45353.6    | 21.56        | 8.13          |
| kita                     | 1.1.36   | ✓      | 44836.8    | 21.81        | 8.04          |
| server-base-router       | 7.1.32   | ✓      | 44354.4    | 22.05        | 7.91          |
| connect                  | 3.7.0    | ✗      | 44143.8    | 22.17        | 7.87          |
| server-base              | 7.1.32   | ✗      | 43949.6    | 22.25        | 7.84          |
| 0http                    | 3.5.3    | ✓      | 43516.8    | 22.48        | 7.76          |
| polkadot                 | 1.0.0    | ✗      | 43380.0    | 22.55        | 7.74          |
| connect-router           | 1.3.8    | ✓      | 41668.8    | 23.51        | 7.43          |
| h3                       | 1.15.4   | ✗      | 41290.4    | 23.71        | 7.36          |
| h3-router                | 1.15.4   | ✓      | 40559.2    | 24.15        | 7.23          |
| restana                  | 4.9.9    | ✓      | 37217.8    | 26.37        | 6.64          |
| hono                     | 4.10.6   | ✓      | 36134.6    | 27.17        | 5.93          |
| koa                      | 2.16.3   | ✗      | 36130.6    | 27.18        | 6.44          |
| take-five                | 2.0.0    | ✓      | 35323.4    | 27.80        | 12.70         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34401.0    | 28.56        | 6.13          |
| restify                  | 11.1.0   | ✓      | 33609.6    | 29.25        | 6.06          |
| koa-router               | 12.0.1   | ✓      | 32323.0    | 30.44        | 5.76          |
| hapi                     | 21.4.4   | ✓      | 30667.2    | 32.10        | 5.47          |
| fastify-big-json         | 4.29.1   | ✓      | 11763.6    | 84.48        | 135.36        |
| express                  | 4.21.2   | ✓      | 10735.4    | 92.55        | 1.91          |
| express-with-middlewares | 4.21.2   | ✓      | 9884.4     | 100.56       | 3.68          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
