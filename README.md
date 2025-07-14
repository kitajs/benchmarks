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
* __Node:__ `v20.19.3`
* __Run:__ Mon Jul 14 2025 01:42:04 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| polka                    | 0.5.2    | ✓      | 47729.6    | 20.45        | 8.51          |
| bare                     | v20.19.3 | ✗      | 47392.0    | 20.59        | 8.45          |
| kita                     | 1.1.36   | ✓      | 47248.0    | 20.66        | 8.47          |
| fastify                  | 4.29.1   | ✓      | 46525.6    | 20.99        | 8.34          |
| connect                  | 3.7.0    | ✗      | 46118.6    | 21.18        | 8.23          |
| polkadot                 | 1.0.0    | ✗      | 45981.6    | 21.25        | 8.20          |
| rayo                     | 1.4.6    | ✓      | 45857.6    | 21.29        | 8.18          |
| server-base-router       | 7.1.32   | ✓      | 45661.6    | 21.38        | 8.14          |
| server-base              | 7.1.32   | ✗      | 45527.2    | 21.46        | 8.12          |
| h3                       | 1.15.3   | ✗      | 44799.2    | 21.82        | 7.99          |
| 0http                    | 3.5.3    | ✓      | 44286.4    | 22.09        | 7.90          |
| h3-router                | 1.15.3   | ✓      | 43627.2    | 22.42        | 7.78          |
| connect-router           | 1.3.8    | ✓      | 43486.4    | 22.49        | 7.76          |
| restana                  | 4.9.9    | ✓      | 39080.0    | 25.09        | 6.97          |
| hono                     | 4.8.4    | ✓      | 37436.0    | 26.22        | 6.14          |
| koa                      | 2.16.1   | ✗      | 36948.2    | 26.55        | 6.59          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35310.6    | 27.83        | 6.30          |
| take-five                | 2.0.0    | ✓      | 34836.2    | 28.21        | 12.53         |
| restify                  | 11.1.0   | ✓      | 34683.4    | 28.32        | 6.25          |
| koa-router               | 12.0.1   | ✓      | 33722.4    | 29.16        | 6.01          |
| hapi                     | 21.4.0   | ✓      | 31705.4    | 31.03        | 5.65          |
| fastify-big-json         | 4.29.1   | ✓      | 11904.0    | 83.43        | 136.97        |
| express                  | 4.21.2   | ✓      | 11042.8    | 89.96        | 1.97          |
| express-with-middlewares | 4.21.2   | ✓      | 10388.6    | 95.63        | 3.86          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
