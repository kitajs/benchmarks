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
* __Node:__ `v20.18.1`
* __Run:__ Mon Dec 09 2024 01:33:43 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| fastify                  | 4.29.0   | ✓      | 46877.6    | 20.82        | 8.40          |
| kita                     | 1.1.36   | ✓      | 46389.6    | 21.05        | 8.32          |
| polka                    | 0.5.2    | ✓      | 45954.4    | 21.25        | 8.20          |
| rayo                     | 1.4.6    | ✓      | 45564.8    | 21.44        | 8.13          |
| bare                     | v20.18.1 | ✗      | 45517.6    | 21.46        | 8.12          |
| connect                  | 3.7.0    | ✗      | 45028.0    | 21.71        | 8.03          |
| 0http                    | 3.5.3    | ✓      | 44931.2    | 21.76        | 8.01          |
| server-base              | 7.1.32   | ✗      | 44675.2    | 21.91        | 7.97          |
| polkadot                 | 1.0.0    | ✗      | 44564.8    | 21.95        | 7.95          |
| server-base-router       | 7.1.32   | ✓      | 44161.6    | 22.15        | 7.88          |
| connect-router           | 1.3.8    | ✓      | 43326.4    | 22.59        | 7.73          |
| h3                       | 1.13.0   | ✗      | 42315.2    | 23.15        | 7.55          |
| h3-router                | 1.13.0   | ✓      | 41338.4    | 23.70        | 7.37          |
| hono                     | 4.6.13   | ✓      | 40123.2    | 24.43        | 7.16          |
| koa                      | 2.15.3   | ✗      | 36923.8    | 26.58        | 6.58          |
| restana                  | 4.9.9    | ✓      | 36749.0    | 26.72        | 6.55          |
| take-five                | 2.0.0    | ✓      | 34246.6    | 28.70        | 12.31         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34127.8    | 28.79        | 6.09          |
| restify                  | 11.1.0   | ✓      | 33541.0    | 29.31        | 6.05          |
| koa-router               | 12.0.1   | ✓      | 32811.4    | 29.97        | 5.85          |
| hapi                     | 21.3.12  | ✓      | 31300.8    | 31.44        | 5.58          |
| fastify-big-json         | 4.29.0   | ✓      | 12011.8    | 82.68        | 138.19        |
| express                  | 4.21.2   | ✓      | 10537.0    | 94.32        | 1.88          |
| express-with-middlewares | 4.21.2   | ✓      | 10003.8    | 99.31        | 3.72          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
